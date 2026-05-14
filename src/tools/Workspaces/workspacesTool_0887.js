/**
 * Generated Tool: workspacesTool_0887
 * Domain: Workspaces
 * ID: 0887
 */
exports.workspacesTool_0887 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0887:', error);
    throw error;
  }
};
