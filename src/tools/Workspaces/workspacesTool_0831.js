/**
 * Generated Tool: workspacesTool_0831
 * Domain: Workspaces
 * ID: 0831
 */
exports.workspacesTool_0831 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0831:', error);
    throw error;
  }
};
