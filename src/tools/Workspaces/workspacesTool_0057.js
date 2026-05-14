/**
 * Generated Tool: workspacesTool_0057
 * Domain: Workspaces
 * ID: 0057
 */
exports.workspacesTool_0057 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0057:', error);
    throw error;
  }
};
