/**
 * Generated Tool: workspacesTool_0925
 * Domain: Workspaces
 * ID: 0925
 */
exports.workspacesTool_0925 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0925:', error);
    throw error;
  }
};
