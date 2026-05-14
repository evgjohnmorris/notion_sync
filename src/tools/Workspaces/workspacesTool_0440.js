/**
 * Generated Tool: workspacesTool_0440
 * Domain: Workspaces
 * ID: 0440
 */
exports.workspacesTool_0440 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0440:', error);
    throw error;
  }
};
