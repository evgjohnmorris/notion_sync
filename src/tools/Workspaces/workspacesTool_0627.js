/**
 * Generated Tool: workspacesTool_0627
 * Domain: Workspaces
 * ID: 0627
 */
exports.workspacesTool_0627 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0627:', error);
    throw error;
  }
};
