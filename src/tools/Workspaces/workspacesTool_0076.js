/**
 * Generated Tool: workspacesTool_0076
 * Domain: Workspaces
 * ID: 0076
 */
exports.workspacesTool_0076 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0076:', error);
    throw error;
  }
};
