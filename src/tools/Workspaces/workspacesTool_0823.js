/**
 * Generated Tool: workspacesTool_0823
 * Domain: Workspaces
 * ID: 0823
 */
exports.workspacesTool_0823 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0823:', error);
    throw error;
  }
};
