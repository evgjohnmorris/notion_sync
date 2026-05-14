/**
 * Generated Tool: workspacesTool_0298
 * Domain: Workspaces
 * ID: 0298
 */
exports.workspacesTool_0298 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0298:', error);
    throw error;
  }
};
