/**
 * Generated Tool: workspacesTool_0464
 * Domain: Workspaces
 * ID: 0464
 */
exports.workspacesTool_0464 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0464:', error);
    throw error;
  }
};
