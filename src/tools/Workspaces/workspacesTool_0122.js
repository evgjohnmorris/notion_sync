/**
 * Generated Tool: workspacesTool_0122
 * Domain: Workspaces
 * ID: 0122
 */
exports.workspacesTool_0122 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0122:', error);
    throw error;
  }
};
