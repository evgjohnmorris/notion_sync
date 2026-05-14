/**
 * Generated Tool: workspacesTool_0964
 * Domain: Workspaces
 * ID: 0964
 */
exports.workspacesTool_0964 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0964:', error);
    throw error;
  }
};
