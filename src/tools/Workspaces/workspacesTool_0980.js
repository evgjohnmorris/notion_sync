/**
 * Generated Tool: workspacesTool_0980
 * Domain: Workspaces
 * ID: 0980
 */
exports.workspacesTool_0980 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0980:', error);
    throw error;
  }
};
