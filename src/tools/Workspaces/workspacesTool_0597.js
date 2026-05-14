/**
 * Generated Tool: workspacesTool_0597
 * Domain: Workspaces
 * ID: 0597
 */
exports.workspacesTool_0597 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0597:', error);
    throw error;
  }
};
