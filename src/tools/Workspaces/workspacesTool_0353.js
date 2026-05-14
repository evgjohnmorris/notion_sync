/**
 * Generated Tool: workspacesTool_0353
 * Domain: Workspaces
 * ID: 0353
 */
exports.workspacesTool_0353 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0353:', error);
    throw error;
  }
};
