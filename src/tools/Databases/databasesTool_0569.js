/**
 * Generated Tool: databasesTool_0569
 * Domain: Databases
 * ID: 0569
 */
exports.databasesTool_0569 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0569:', error);
    throw error;
  }
};
