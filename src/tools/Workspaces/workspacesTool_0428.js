/**
 * Generated Tool: workspacesTool_0428
 * Domain: Workspaces
 * ID: 0428
 */
exports.workspacesTool_0428 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0428:', error);
    throw error;
  }
};
