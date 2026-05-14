/**
 * Generated Tool: workspacesTool_0622
 * Domain: Workspaces
 * ID: 0622
 */
exports.workspacesTool_0622 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0622:', error);
    throw error;
  }
};
