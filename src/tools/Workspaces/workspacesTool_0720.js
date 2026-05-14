/**
 * Generated Tool: workspacesTool_0720
 * Domain: Workspaces
 * ID: 0720
 */
exports.workspacesTool_0720 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0720:', error);
    throw error;
  }
};
