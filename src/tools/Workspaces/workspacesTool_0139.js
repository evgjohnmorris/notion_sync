/**
 * Generated Tool: workspacesTool_0139
 * Domain: Workspaces
 * ID: 0139
 */
exports.workspacesTool_0139 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0139:', error);
    throw error;
  }
};
