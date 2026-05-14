/**
 * Generated Tool: workspacesTool_0447
 * Domain: Workspaces
 * ID: 0447
 */
exports.workspacesTool_0447 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0447:', error);
    throw error;
  }
};
