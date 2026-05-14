/**
 * Generated Tool: workspacesTool_0847
 * Domain: Workspaces
 * ID: 0847
 */
exports.workspacesTool_0847 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0847:', error);
    throw error;
  }
};
