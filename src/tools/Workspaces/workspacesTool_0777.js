/**
 * Generated Tool: workspacesTool_0777
 * Domain: Workspaces
 * ID: 0777
 */
exports.workspacesTool_0777 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0777:', error);
    throw error;
  }
};
