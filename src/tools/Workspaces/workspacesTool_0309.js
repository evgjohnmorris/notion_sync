/**
 * Generated Tool: workspacesTool_0309
 * Domain: Workspaces
 * ID: 0309
 */
exports.workspacesTool_0309 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0309:', error);
    throw error;
  }
};
