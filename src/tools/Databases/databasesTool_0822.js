/**
 * Generated Tool: databasesTool_0822
 * Domain: Databases
 * ID: 0822
 */
exports.databasesTool_0822 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0822:', error);
    throw error;
  }
};
