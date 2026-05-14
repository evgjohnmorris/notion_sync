/**
 * Generated Tool: workspacesTool_0439
 * Domain: Workspaces
 * ID: 0439
 */
exports.workspacesTool_0439 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0439:', error);
    throw error;
  }
};
