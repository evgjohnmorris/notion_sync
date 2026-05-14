/**
 * Generated Tool: workspacesTool_0028
 * Domain: Workspaces
 * ID: 0028
 */
exports.workspacesTool_0028 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0028:', error);
    throw error;
  }
};
