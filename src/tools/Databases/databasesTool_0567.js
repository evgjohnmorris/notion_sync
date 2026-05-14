/**
 * Generated Tool: databasesTool_0567
 * Domain: Databases
 * ID: 0567
 */
exports.databasesTool_0567 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0567:', error);
    throw error;
  }
};
