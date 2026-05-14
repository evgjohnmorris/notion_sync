/**
 * Generated Tool: workspacesTool_0036
 * Domain: Workspaces
 * ID: 0036
 */
exports.workspacesTool_0036 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0036:', error);
    throw error;
  }
};
