import AccountOverview from './components/AccountOverview'
import AppContent from './styles'

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: 'John Smith',
      email: 'john.smith@support.com'
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    }
  }


  return (
    <AppContent>
      <AccountOverview data={accountOverviewStub}/>
    </AppContent>
  );
}

export default App;
