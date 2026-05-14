/**
 * Generated Tool: workspacesTool_0064
 * Domain: Workspaces
 * ID: 0064
 */
exports.workspacesTool_0064 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0064:', error);
    throw error;
  }
};
