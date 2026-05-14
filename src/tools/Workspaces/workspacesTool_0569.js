/**
 * Generated Tool: workspacesTool_0569
 * Domain: Workspaces
 * ID: 0569
 */
exports.workspacesTool_0569 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0569:', error);
    throw error;
  }
};
