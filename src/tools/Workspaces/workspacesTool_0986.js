/**
 * Generated Tool: workspacesTool_0986
 * Domain: Workspaces
 * ID: 0986
 */
exports.workspacesTool_0986 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0986:', error);
    throw error;
  }
};
