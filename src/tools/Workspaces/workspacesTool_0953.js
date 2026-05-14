/**
 * Generated Tool: workspacesTool_0953
 * Domain: Workspaces
 * ID: 0953
 */
exports.workspacesTool_0953 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0953:', error);
    throw error;
  }
};
