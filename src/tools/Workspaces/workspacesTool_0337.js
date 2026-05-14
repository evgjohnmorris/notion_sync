/**
 * Generated Tool: workspacesTool_0337
 * Domain: Workspaces
 * ID: 0337
 */
exports.workspacesTool_0337 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0337:', error);
    throw error;
  }
};
