/**
 * Generated Tool: workspacesTool_0105
 * Domain: Workspaces
 * ID: 0105
 */
exports.workspacesTool_0105 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0105:', error);
    throw error;
  }
};
