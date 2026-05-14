/**
 * Generated Tool: databasesTool_0533
 * Domain: Databases
 * ID: 0533
 */
exports.databasesTool_0533 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0533:', error);
    throw error;
  }
};
