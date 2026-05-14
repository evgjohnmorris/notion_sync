/**
 * Generated Tool: workspacesTool_0190
 * Domain: Workspaces
 * ID: 0190
 */
exports.workspacesTool_0190 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0190:', error);
    throw error;
  }
};
