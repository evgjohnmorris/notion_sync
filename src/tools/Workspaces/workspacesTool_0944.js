/**
 * Generated Tool: workspacesTool_0944
 * Domain: Workspaces
 * ID: 0944
 */
exports.workspacesTool_0944 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0944:', error);
    throw error;
  }
};
