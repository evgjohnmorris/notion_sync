/**
 * Generated Tool: workspacesTool_0274
 * Domain: Workspaces
 * ID: 0274
 */
exports.workspacesTool_0274 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0274:', error);
    throw error;
  }
};
