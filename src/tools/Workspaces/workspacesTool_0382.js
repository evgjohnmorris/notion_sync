/**
 * Generated Tool: workspacesTool_0382
 * Domain: Workspaces
 * ID: 0382
 */
exports.workspacesTool_0382 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0382:', error);
    throw error;
  }
};
