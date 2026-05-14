/**
 * Generated Tool: workspacesTool_0874
 * Domain: Workspaces
 * ID: 0874
 */
exports.workspacesTool_0874 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0874:', error);
    throw error;
  }
};
