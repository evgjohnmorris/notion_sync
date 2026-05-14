/**
 * Generated Tool: workspacesTool_0426
 * Domain: Workspaces
 * ID: 0426
 */
exports.workspacesTool_0426 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0426:', error);
    throw error;
  }
};
