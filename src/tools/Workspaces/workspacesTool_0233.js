/**
 * Generated Tool: workspacesTool_0233
 * Domain: Workspaces
 * ID: 0233
 */
exports.workspacesTool_0233 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0233:', error);
    throw error;
  }
};
