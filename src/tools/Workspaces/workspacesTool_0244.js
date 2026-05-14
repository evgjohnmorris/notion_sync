/**
 * Generated Tool: workspacesTool_0244
 * Domain: Workspaces
 * ID: 0244
 */
exports.workspacesTool_0244 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0244:', error);
    throw error;
  }
};
