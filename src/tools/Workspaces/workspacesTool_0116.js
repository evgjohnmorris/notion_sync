/**
 * Generated Tool: workspacesTool_0116
 * Domain: Workspaces
 * ID: 0116
 */
exports.workspacesTool_0116 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0116:', error);
    throw error;
  }
};
