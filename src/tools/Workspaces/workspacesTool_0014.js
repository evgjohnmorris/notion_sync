/**
 * Generated Tool: workspacesTool_0014
 * Domain: Workspaces
 * ID: 0014
 */
exports.workspacesTool_0014 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0014:', error);
    throw error;
  }
};
