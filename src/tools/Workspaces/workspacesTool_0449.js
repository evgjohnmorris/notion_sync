/**
 * Generated Tool: workspacesTool_0449
 * Domain: Workspaces
 * ID: 0449
 */
exports.workspacesTool_0449 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0449:', error);
    throw error;
  }
};
