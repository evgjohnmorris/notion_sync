/**
 * Generated Tool: workspacesTool_0223
 * Domain: Workspaces
 * ID: 0223
 */
exports.workspacesTool_0223 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0223:', error);
    throw error;
  }
};
