/**
 * Generated Tool: databasesTool_0633
 * Domain: Databases
 * ID: 0633
 */
exports.databasesTool_0633 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0633:', error);
    throw error;
  }
};
