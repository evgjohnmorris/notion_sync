/**
 * Generated Tool: workspacesTool_0904
 * Domain: Workspaces
 * ID: 0904
 */
exports.workspacesTool_0904 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0904:', error);
    throw error;
  }
};
