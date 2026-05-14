/**
 * Generated Tool: workspacesTool_0810
 * Domain: Workspaces
 * ID: 0810
 */
exports.workspacesTool_0810 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0810:', error);
    throw error;
  }
};
